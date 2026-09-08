import React from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiRedux,
  SiTailwindcss,
  SiVite,
  SiChartdotjs,
  SiSocketdotio,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiJsonwebtokens,
  SiAwslambda,
  SiAmazondynamodb,
  SiAmazons3,
  SiAmazonaws,
  SiMongodb,
  SiRedis,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiPostman,
  SiJest,
  SiTestinglibrary,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import {
  FaJava,
  FaBolt,
  FaNetworkWired,
  FaLayerGroup,
  FaShieldAlt,
  FaCubes,
  FaServer,
  FaCogs,
  FaCode,
} from 'react-icons/fa';

const iconMap = {
  typescript: { icon: SiTypescript, color: '#3178C6', bg: '#EFF6FF' },
  javascript: { icon: SiJavascript, color: '#EAB308', bg: '#FEFCE8' },
  'javascript (es6+)': { icon: SiJavascript, color: '#EAB308', bg: '#FEFCE8' },
  java: { icon: FaJava, color: '#EA580C', bg: '#FFF7ED' },
  python: { icon: SiPython, color: '#0284C7', bg: '#F0F9FF' },
  sql: { icon: SiMysql, color: '#0284C7', bg: '#F0F9FF' },
  mysql: { icon: SiMysql, color: '#0284C7', bg: '#F0F9FF' },

  react: { icon: SiReact, color: '#0891B2', bg: '#ECFEFF' },
  'react js': { icon: SiReact, color: '#0891B2', bg: '#ECFEFF' },
  'next.js': { icon: SiNextdotjs, color: '#000000', bg: '#F4F4F5' },
  'next js': { icon: SiNextdotjs, color: '#000000', bg: '#F4F4F5' },
  angular: { icon: SiAngular, color: '#DC2626', bg: '#FEF2F2' },
  redux: { icon: SiRedux, color: '#7C3AED', bg: '#F5F3FF' },
  'tailwind css': { icon: SiTailwindcss, color: '#06B6D4', bg: '#ECFEFF' },
  vite: { icon: SiVite, color: '#6366F1', bg: '#EEF2FF' },
  'chart.js': { icon: SiChartdotjs, color: '#F43F5E', bg: '#FFF1F2' },
  'socket.io': { icon: SiSocketdotio, color: '#18181B', bg: '#F4F4F5' },
  'performance tuning': { icon: FaBolt, color: '#D97706', bg: '#FFFBEB' },
  html: { icon: SiHtml5, color: '#EA580C', bg: '#FFF7ED' },
  css: { icon: SiCss3, color: '#2563EB', bg: '#EFF6FF' },

  'node.js': { icon: SiNodedotjs, color: '#16A34A', bg: '#F0FDF4' },
  'node js': { icon: SiNodedotjs, color: '#16A34A', bg: '#F0FDF4' },
  'express.js': { icon: SiExpress, color: '#27272A', bg: '#F4F4F5' },
  'express js': { icon: SiExpress, color: '#27272A', bg: '#F4F4F5' },
  'rest apis': { icon: FaNetworkWired, color: '#4F46E5', bg: '#EEF2FF' },
  graphql: { icon: SiGraphql, color: '#DB2777', bg: '#FDF2F8' },
  'jwt auth': { icon: SiJsonwebtokens, color: '#9333EA', bg: '#FAF5FF' },
  middleware: { icon: FaLayerGroup, color: '#7C3AED', bg: '#F5F3FF' },

  'aws lambda': { icon: SiAwslambda, color: '#EA580C', bg: '#FFF7ED' },
  dynamodb: { icon: SiAmazondynamodb, color: '#2563EB', bg: '#EFF6FF' },
  'api gateway': { icon: SiAmazonaws, color: '#EA580C', bg: '#FFF7ED' },
  s3: { icon: SiAmazons3, color: '#16A34A', bg: '#F0FDF4' },
  cloudwatch: { icon: SiAmazonaws, color: '#DC2626', bg: '#FEF2F2' },
  mongodb: { icon: SiMongodb, color: '#15803D', bg: '#F0FDF4' },
  redis: { icon: SiRedis, color: '#DC2626', bg: '#FEF2F2' },
  'aes-256 encryption': { icon: FaShieldAlt, color: '#059669', bg: '#ECFDF5' },
  aws: { icon: SiAmazonaws, color: '#EA580C', bg: '#FFF7ED' },

  microservices: { icon: FaCubes, color: '#2563EB', bg: '#EFF6FF' },
  'serverless architecture': { icon: FaServer, color: '#E11D48', bg: '#FFF1F2' },
  'system design': { icon: FaCogs, color: '#7C3AED', bg: '#F5F3FF' },
  'component architecture': { icon: FaCode, color: '#DB2777', bg: '#FDF2F8' },
  'data structures & algorithms': { icon: FaCode, color: '#0D9488', bg: '#F0FDFA' },

  'git & bitbucket': { icon: SiGit, color: '#EA580C', bg: '#FFF7ED' },
  git: { icon: SiGit, color: '#EA580C', bg: '#FFF7ED' },
  docker: { icon: SiDocker, color: '#0284C7', bg: '#F0F9FF' },
  'ci/cd': { icon: SiGithubactions, color: '#2563EB', bg: '#EFF6FF' },
  postman: { icon: SiPostman, color: '#EA580C', bg: '#FFF7ED' },
  jest: { icon: SiJest, color: '#DC2626', bg: '#FEF2F2' },
  'react testing library': { icon: SiTestinglibrary, color: '#DC2626', bg: '#FEF2F2' },
  'agile & code reviews': { icon: FaCogs, color: '#059669', bg: '#ECFDF5' },
};

export const getSkillDetails = (name) => {
  if (!name) return { Icon: FaCode, color: '#71717A', bg: '#F4F4F5' };
  const key = name.trim().toLowerCase();
  const match = iconMap[key];
  if (match) {
    return { Icon: match.icon, color: match.color, bg: match.bg };
  }
  for (const [k, val] of Object.entries(iconMap)) {
    if (key.includes(k)) {
      return { Icon: val.icon, color: val.color, bg: val.bg };
    }
  }
  return { Icon: FaCode, color: '#71717A', bg: '#F4F4F5' };
};
