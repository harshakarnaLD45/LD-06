// messageFormatter.js - UPDATED FOR NESTED LISTS
export const cleanMarkdownFormatting = (text) => {
  if (!text) return text;

  // Remove bold markdown
  let formatted = text.replace(/\*\*(.+?)\*\*/g, '$1');

  // Split into lines for processing
  const lines = formatted.split('\n');
  const processedLines = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Check if this is a numbered item (e.g., "1. Live Menu Availability")
    const numberedMatch = line.match(/^(\d+)\.\s+(.+)/);
    
    if (numberedMatch) {
      const mainContent = numberedMatch[2];
      const bullets = [];
      
      // Look ahead for bullet points under this numbered item
      let j = i + 1;
      while (j < lines.length) {
        const nextLine = lines[j].trim();
        const bulletMatch = nextLine.match(/^[-*•]\s+(.+)/);
        
        if (bulletMatch) {
          bullets.push(bulletMatch[1]);
          j++;
        } else if (nextLine === '') {
          j++;
          continue;
        } else {
          break;
        }
      }

      // Build the HTML structure
      let html = `<li><strong>${mainContent}</strong>`;
      if (bullets.length > 0) {
        html += '<ul>';
        bullets.forEach(bullet => {
          html += `<li>${bullet}</li>`;
        });
        html += '</ul>';
      }
      html += '</li>';
      
      processedLines.push(html);
      i = j; // Skip to the next unprocessed line
    } 
    // Standalone bullet point (not under a numbered item)
    else if (line.match(/^[-*•]\s+(.+)/)) {
      const bulletContent = line.replace(/^[-*•]\s+/, '');
      processedLines.push(`<li>${bulletContent}</li>`);
      i++;
    }
    // Regular text or empty line
    else {
      if (line !== '') {
        processedLines.push(line);
      }
      i++;
    }
  }

  // Wrap consecutive <li> tags in <ol>
  let result = [];
  let currentList = [];
  let inList = false;

  for (const line of processedLines) {
    if (line.startsWith('<li>')) {
      currentList.push(line);
      inList = true;
    } else {
      if (inList && currentList.length > 0) {
        result.push('<ol>' + currentList.join('') + '</ol>');
        currentList = [];
        inList = false;
      }
      result.push(line);
    }
  }

  // Close any remaining list
  if (currentList.length > 0) {
    result.push('<ol>' + currentList.join('') + '</ol>');
  }

  return result.join('\n');
};