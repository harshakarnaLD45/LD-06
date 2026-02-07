import React, { useState, useEffect, useRef } from 'react';
import {
  Send as SendIcon,
  Close as CloseIcon,
  Chat as ChatIcon,
  FiberManualRecord as FiberManualRecordIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';
import {
  IconButton,
  TextField,
  Box,
  Typography,
  Avatar,
  Fade,
  Grow,
  Paper,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import Boticon from '../../assets/Chatbot/ai_bot_icon.svg';
import Userperson from '../../assets/Chatbot/person_icon.svg';
import InputIcon from '../../assets/Chatbot/Chat_send_icon.svg';
import SmileGif from '../../assets/Chatbot/naf-logo-loading.gif';
import Chef_icon from '../../assets/Chatbot/chef-icon.png';
import './ChatBot.css';

const NAFChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showInfoBubble, setShowInfoBubble] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const { t, i18n: i18nInstance } = useTranslation();

  // n8n Configuration
  // const N8N_CONFIG = {
  //   webhookUrl: 'https://n8n.naf-cloudsystem.de/webhook/1bfcd2fb-c2a8-47a2-bb46-9c1c3b21c4e2/chat',
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   chatInputKey: 'chatInput',
  //   sessionIdKey: 'sessionId',
  // };

   const N8N_CONFIG = {
    webhookUrl: 'https://n8n.naf-cloudsystem.de/webhook/99966f90-7796-4622-8715-5431b7a2a50f/chat',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    chatInputKey: 'chatInput',
    sessionIdKey: 'sessionId',
  };
  // Dynamic welcome message based on language
  const getWelcomeMessage = (language) => ({
    id: 'welcome',
    text: t('chatbot.welcomeMessage'),
    sender: 'bot',
    timestamp: new Date(),
  });

  // Initialize chat session and language detection
  useEffect(() => {
    // Detect current website language
    const detectedLanguage = i18nInstance.language || i18n.language || 'en';
    setCurrentLanguage(detectedLanguage);

    const storedSessionId = localStorage.getItem('naf_sessionId');
    if (storedSessionId) {
      setSessionId(storedSessionId);
      loadPreviousSession(storedSessionId);
    } else {
      const newSessionId = generateSessionId();
      setSessionId(newSessionId);
      localStorage.setItem('naf_sessionId', newSessionId);
    }
  }, [i18nInstance.language]);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
      // Update welcome message when language changes
      if (messages.length === 1 && messages[0].id === 'welcome') {
        const newWelcomeMessage = getWelcomeMessage(lng);
        setMessages([newWelcomeMessage]);
        saveMessages([newWelcomeMessage]);
      }
    };

    i18nInstance.on('languageChanged', handleLanguageChange);
    return () => {
      i18nInstance.off('languageChanged', handleLanguageChange);
    };
  }, [messages, i18nInstance]);

  // Auto-scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show info bubble after page load
  useEffect(() => {
    const hasShownBubble = sessionStorage.getItem('naf_info_bubble_shown');
    if (!hasShownBubble && !isOpen) {
      const timer = setTimeout(() => {
        setShowInfoBubble(true);
        // Auto-hide after 10 seconds
        setTimeout(() => {
          setShowInfoBubble(false);
          sessionStorage.setItem('naf_info_bubble_shown', 'true');
        }, 10000);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const generateSessionId = () => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const loadPreviousSession = (sessionId) => {
    const storedMessages = localStorage.getItem(`naf_messages_${sessionId}`);
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else {
      const welcomeMessage = getWelcomeMessage(currentLanguage);
      setMessages([welcomeMessage]);
    }
  };

  const saveMessages = (msgs) => {
    localStorage.setItem(`naf_messages_${sessionId}`, JSON.stringify(msgs));
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessageToN8N = async (message) => {
    try {
      const payload = {
        [N8N_CONFIG.chatInputKey]: message,
        [N8N_CONFIG.sessionIdKey]: sessionId,
        timestamp: new Date().toISOString(),
        language: currentLanguage, // Send current website language
        userLanguage: currentLanguage, // Alternative key for n8n workflow
        locale: currentLanguage,
        context: {
          websiteLanguage: currentLanguage,
          preferredLanguage: currentLanguage,
          source: 'naf_website'
        }
      };

      console.log('Sending message with language context:', {
        language: currentLanguage,
        message: message
      });

      const response = await fetch(N8N_CONFIG.webhookUrl, {
        method: N8N_CONFIG.method,
        headers: N8N_CONFIG.headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.output || data.message || data.response || t('chatbot.errorMessage');
    } catch (error) {
      console.error('Error sending message to n8n:', error);
      return t('chatbot.connectionError');
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: `user_${Date.now()}`,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    const botResponse = await sendMessageToN8N(inputValue);

    const botMessage = {
      id: `bot_${Date.now()}`,
      text: botResponse,
      sender: 'bot',
      timestamp: new Date(),
    };

    const finalMessages = [...updatedMessages, botMessage];
    setMessages(finalMessages);
    saveMessages(finalMessages);
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    if (!isOpen && messages.length === 0) {
      const welcomeMessage = getWelcomeMessage(currentLanguage);
      setMessages([welcomeMessage]);
    }
    setIsOpen(!isOpen);
    // Hide info bubble when chat opens
    if (!isOpen) {
      setShowInfoBubble(false);
      sessionStorage.setItem('naf_info_bubble_shown', 'true');
    }
  };

  const startNewConversation = () => {
    const newSessionId = generateSessionId();
    setSessionId(newSessionId);
    localStorage.setItem('naf_sessionId', newSessionId);
    const welcomeMessage = getWelcomeMessage(currentLanguage);
    setMessages([welcomeMessage]);
    saveMessages([welcomeMessage]);
  };

  return (
    <Box className="naf-chatbot-sec"
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1300,
      }}
    >
      {/* Chat Button and Info Bubble Container */}
      {!isOpen && (
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            gap: 1,
          }}
        >
          {/* Chat Info Bubble */}
          {showInfoBubble && (
            <Fade in={showInfoBubble}>
              <Paper
                elevation={3}
                sx={{
                  p: "8px 12px",
                  borderRadius: "16px",
                  backgroundColor: "#fff8f6",
                  color: "#333",
                  position: "relative",
                  bottom: "90px",
                  right: "-70px",
                  fontSize: "0.9rem",
                  zIndex: 1000,
                  maxWidth: "200px",
                  // border: "2px solid #F97316",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-8px",
                    right: "20px",
                    width: 0,
                    height: 0,
                     zIndex: 1000,
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderTop: "8px solid #F97316",
                  },
                }}
              >
                <Typography variant="body2" sx={{ flex: 1 }}>
                  {t('chatbot.infoBubble')}
                </Typography>
                {/* <IconButton
                  size="small"
                  onClick={() => {
                    setShowInfoBubble(false);
                    sessionStorage.setItem('naf_info_bubble_shown', 'true');
                  }}
                  sx={{
                    color: "#666",
                    padding: "2px",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton> */}
              </Paper>
            </Fade>
          )}

          {/* Chat Button */}
          <Grow in={!isOpen}>
            <IconButton
              className='chat_toggle_icons'
              onClick={toggleChat}
              sx={{
                // background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
                backgroundColor: '#ffffff',
                color: 'white',
                width: 84,
                position:'relative',
                height: 84,
                '&:hover': {
                  transform: 'scale(1)',
                  cursor: 'pointer',
                backgroundColor: '#ffffff'

                },
                 '@media (max-width: 490px)': {
                            // minWidth: '350px',
                          width: 54,
                          height: 54,


                          },
                overflow:'hidden',
                transition: 'all 0.3s ease',
              }}
              aria-label={t('chatbot.openChat')}
            >
              <img 
                              src={Chef_icon} 
                              alt="User" 
                              style={{  width: '90%', height: '90%' , borderRadius: '50%',position:'absolute',bottom:'-5px' }}
                            />
{/* 
              <video
                src={Chef_icon2}
                alt="User"
                autoPlay
                style={{  width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}}
                loop
                muted
                width="50"
              /> */}



            </IconButton>
          </Grow>
        </Box>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Fade in={isOpen}>
          <Box className="naf-chatbot-container"
            sx={{
              bgcolor: '#374151',
              borderRadius: 4,
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
              width: "500px",
              height: 600,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <Box
              sx={{
                background: '#6F6F6F',
                px: 2,
                py: 2,
                 '@media (max-width: 490px)': {
                          
                          px:1.5  
                          },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #4B5563',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
                    fontWeight: 'bold',
                    fontSize: 18,
                    boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
                  }}
                >
                  <img
                    src={SmileGif}
                    alt="User"
                    style={{ width: '100%', height: '100%', }}
                  />

                </Avatar>
                <Box>
                  <Typography className='bodyMediumText2'
                    variant="subtitle1"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      fontSize: 18,
                    }}
                  >
                    {t('chatbot.title')}
                  </Typography>

                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <IconButton
                  onClick={startNewConversation}
                  size="small"
                  sx={{
                    color: '#D1D5DB',
                    '&:hover': {
                      color: 'white',
                      bgcolor: '#4B5563',
                    },
                  }}
                  title={t('chatbot.newConversation')}
                >
                  <RefreshIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={toggleChat}
                  size="small"
                  sx={{
                    color: '#D1D5DB',
                    '&:hover': {
                      color: 'white',
                      bgcolor: '#4B5563',
                    },
                  }}
                  aria-label={t('chatbot.closeChat')}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>

            {/* Messages Container */}
            <Box
              ref={chatContainerRef}
              sx={{
                flex: 1,
                overflowY: 'auto',
                p: 1.5,
                
                 '@media (max-width: 490px)': {
                          px: 1
                          },
                bgcolor: '#525252',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#1F2937',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#4B5563',
                  borderRadius: '3px',
                  '&:hover': {
                    background: '#6B7280',
                  },
                },
              }}
            >
              {messages.map((message) => (
                <Fade in key={message.id}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',

                        gap: 1,
                        maxWidth: '95%',
                        flexDirection: message.sender === 'user' ? 'row' : 'row-reverse',
                      }}
                    >
                      {/* Message Bubble */}
                      <Box
                        sx={{
                          borderRadius: 3,
                          px: 2,
                          py: 1.5,
                          background:
                            message.sender === 'user'
                              ? 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)'
                              : '#374151',
                          color: message.sender === 'user' ? 'white' : '#F3F4F6',
                          borderBottomRightRadius: message.sender === 'user' ? 0 : 16,
                          borderBottomLeftRadius: message.sender === 'bot' ? 0 : 16,
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                          flex: 1,
                          minWidth: 0,
                        }}
                      >
                        <Typography className="bodyMediumText3"
                          variant="body2"
                          sx={{
                            fontSize: 14,
                            lineHeight: 1.6,
                            whiteSpace: 'pre-wrap',
                            color: '#FCFCFC',
                            wordBreak: 'break-word',
                          }}
                        >
                          {message.text}
                        </Typography>
                      </Box>

                      {/* Avatar Icon */}
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          display: 'flex',
                          alignSelf: 'end',
                          justifyContent: 'center',
                          flexShrink: 0,
                          mt: 0.5,
                        }}
                      >
                        {message.sender === 'user' ? (
                          <img className='chat_message_icons'
                            src={Userperson}
                            alt="User"
                            style={{ width: '20px', height: '100%', }}
                          />
                        ) : (

                          <img className='chat_message_icons'
                            src={Boticon}
                            alt="Bot"
                            style={{ width: '20px', height: '100%', }}
                          />
                        )}
                      </Box>
                      {/* <Typography
                        variant="caption"
                        sx={{
                          opacity: 0.7,
                          mt: 0.5,
                          display: 'block',
                          fontSize: 11,
                        }}
                      >
                        {message.timestamp.toLocaleTimeString('de-DE', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Typography> */}
                    </Box>
                  </Box>
                </Fade>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <Fade in>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: '#374151',
                        borderRadius: 3,
                        borderBottomLeftRadius: 0,
                        px: 2,
                        py: 1.5,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      <Box sx={{ display: 'flex', gap: 0.75 }}>
                        {[0, 150, 300].map((delay) => (
                          <Box
                            key={delay}
                            sx={{
                              width: 8,
                              height: 8,
                              bgcolor: '#F97316',
                              borderRadius: '50%',
                              animation: 'bounce 1s infinite',
                              animationDelay: `${delay}ms`,
                              '@keyframes bounce': {
                                '0%, 100%': {
                                  transform: 'translateY(0)',
                                },
                                '50%': {
                                  transform: 'translateY(-8px)',
                                },
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Fade>
              )}

              <div ref={messagesEndRef} />
            </Box>

            {/* Input Area */}
            <Box
              sx={{
                bgcolor: '#525252',
                borderTop: '1px solid #4B5563',
                p: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  bgcolor: '#E0E0E0',
                  borderRadius: "12px",
                  px: 2,
                  height: 40,
                  py: 0.5,

                  // boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
                }}
              // sx={{padding:'10px',borderRadius:'5px',backgroundColor:'#E0E0E0'}}
              // 
              >
                <TextField
                  className="bodyMediumText3"
                  fullWidth
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('chatbot.inputPlaceholder')}
                  disabled={isLoading}
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      color: '#888888',
                      fontSize: 14,
                      '& input::placeholder': {
                        color: '#888888',
                        opacity: 1,
                      },
                    },
                  }}

                />
                {/* <IconButton
                  sx={{
                    background: !inputValue.trim() || isLoading 
                      ? '#6B7280' 
                      : 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
                    color: 'white',
                    // p: 1.25,
                    boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
                    '&:hover': {
                      background: !inputValue.trim() || isLoading
                        ? '#6B7280'
                        : 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)',
                      transform: !inputValue.trim() || isLoading ? 'none' : 'scale(1.05)',
                    },
                    '&:disabled': {
                      background: '#6B7280',
                      color: 'white',
                      },
                      transition: 'all 0.3s ease',
                      }}
                      aria-label={t('chatbot.sendMessage')}
                      > */}
                <img className='chat_message_icons'
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  src={InputIcon}
                  alt="User"
                  style={{ width: '27px', height: '100%', }}
                />
                {/* </IconButton> */}
              </Box>

            </Box>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default NAFChatbot;