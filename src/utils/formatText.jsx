import React from 'react';

const TECH_REGEX = /(AWS Lambda|DynamoDB|WebSocket|Socket\.IO|REST APIs|REST API|GraphQL|Docker|MongoDB|Redis|AES-256|Jest|Redux Toolkit|TypeScript|Next\.js|React|Chart\.js|API Gateway|S3|CloudWatch|<50ms|70,000\+|2M\+|JWT|B2B SaaS)/g;

export const renderWithCodeTags = (text) => {
  if (!text || typeof text !== 'string') return text;
  const parts = text.split(TECH_REGEX);
  if (parts.length === 1) return text;

  return parts.map((part, i) => {
    if (TECH_REGEX.test(part)) {
      TECH_REGEX.lastIndex = 0;
      return <code key={i}>{part}</code>;
    }
    return part;
  });
};
