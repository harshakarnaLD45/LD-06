// htmlParser.js - UPDATED FOR NESTED LISTS
import React from 'react';
import parse from 'html-react-parser';

export const parseHtmlToReact = (htmlString) => {
  if (!htmlString) return null;

  // Clean up excessive whitespace
  const cleanedHtml = htmlString
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();

  const options = {
    replace: (domNode) => {
      // Main ordered list (numbered 1, 2, 3...)
      if (domNode.name === 'ol' && domNode.parent?.name !== 'li') {
        return (
          <ol style={{ 
            margin: '8px 0',
            padding: '0 0 0 20px',
            listStyleType: 'decimal',
            lineHeight: '1.5'
          }}>
            {domNode.children?.filter(child => child.name === 'li').map((child, index) => (
              <li 
                key={index} 
                style={{ 
                  marginBottom: '12px', // More space between main numbered items
                  paddingLeft: '4px',
                  lineHeight: '1.5'
                }}
              >
                {renderListItemContent(child.children)}
              </li>
            ))}
          </ol>
        );
      }

      // Nested unordered list (bullet points under numbered items)
      if (domNode.name === 'ul' && domNode.parent?.name === 'li') {
        return (
          <ul style={{ 
            margin: '6px 0 0 0', // Small top margin, no bottom margin
            padding: '0 0 0 20px',
            listStyleType: 'disc',
            lineHeight: '1.5'
          }}>
            {domNode.children?.filter(child => child.name === 'li').map((child, index) => (
              <li 
                key={index} 
                style={{ 
                  marginBottom: '4px', // Minimal space between bullets
                  paddingLeft: '4px',
                  lineHeight: '1.5'
                }}
              >
                {parseChildren(child.children)}
              </li>
            ))}
          </ul>
        );
      }

      // Standalone unordered list
      if (domNode.name === 'ul' && domNode.parent?.name !== 'li') {
        return (
          <ul style={{ 
            margin: '8px 0',
            padding: '0 0 0 20px',
            listStyleType: 'disc',
            lineHeight: '1.5'
          }}>
            {domNode.children?.filter(child => child.name === 'li').map((child, index) => (
              <li 
                key={index} 
                style={{ 
                  marginBottom: '6px',
                  paddingLeft: '4px',
                  lineHeight: '1.5'
                }}
              >
                {parseChildren(child.children)}
              </li>
            ))}
          </ul>
        );
      }

      // Paragraphs
      if (domNode.name === 'p') {
        return (
          <p style={{ margin: '8px 0', lineHeight: '1.5' }}>
            {parseChildren(domNode.children)}
          </p>
        );
      }

      // Strong/Bold - used for main numbered item text
      if (domNode.name === 'strong' || domNode.name === 'b') {
        return <strong style={{ fontWeight: 600 }}>{parseChildren(domNode.children)}</strong>;
      }

      // Headings
      if (['h1', 'h2', 'h3', 'h4'].includes(domNode.name)) {
        const HeadingTag = domNode.name;
        return (
          <HeadingTag style={{ margin: '12px 0 8px 0', lineHeight: '1.3', fontWeight: 600 }}>
            {parseChildren(domNode.children)}
          </HeadingTag>
        );
      }
    }
  };

  try {
    return parse(cleanedHtml, options);
  } catch (error) {
    console.error('Error parsing HTML:', error);
    return cleanedHtml;
  }
};

// Helper to render list item content (handles nested lists)
const renderListItemContent = (children) => {
  if (!children) return null;
  
  return children.map((child, index) => {
    if (child.type === 'text') {
      return child.data;
    }
    if (child.type === 'tag') {
      if (child.name === 'strong' || child.name === 'b') {
        return <strong key={index} style={{ fontWeight: 600 }}>{parseChildren(child.children)}</strong>;
      }
      if (child.name === 'ul') {
        // Nested bullet list
        return (
          <ul key={index} style={{ 
            margin: '6px 0 0 0',
            padding: '0 0 0 20px',
            listStyleType: 'disc',
            lineHeight: '1.5'
          }}>
            {child.children?.filter(c => c.name === 'li').map((li, i) => (
              <li 
                key={i} 
                style={{ 
                  marginBottom: '4px',
                  paddingLeft: '4px',
                  lineHeight: '1.5'
                }}
              >
                {parseChildren(li.children)}
              </li>
            ))}
          </ul>
        );
      }
    }
    return null;
  }).filter(Boolean);
};

// Helper function to parse children nodes
const parseChildren = (children) => {
  if (!children) return null;
  
  return children.map((child, index) => {
    if (child.type === 'text') {
      return child.data;
    }
    if (child.type === 'tag') {
      if (child.name === 'strong' || child.name === 'b') {
        return <strong key={index}>{parseChildren(child.children)}</strong>;
      }
      if (child.name === 'em' || child.name === 'i') {
        return <em key={index}>{parseChildren(child.children)}</em>;
      }
      // Handle other tags recursively
      const content = parseChildren(child.children);
      return <React.Fragment key={index}>{content}</React.Fragment>;
    }
    return null;
  }).filter(Boolean);
};