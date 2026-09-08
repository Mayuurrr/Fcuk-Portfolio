import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Bio } from '../data/constants.js';

const Section = styled.section`
  padding: 40px 0 36px 0;

  @media (max-width: 640px) {
    padding: 28px 0 28px 0;
  }
`;

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 32px;
`;

const SectionTag = styled.span`
  font-family: ${({ theme }) => theme.font_mono};
  font-size: 11px;
  font-weight: 600;
  color: #52525B;
  background: #F4F4F5;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 3px 8px;
  border-radius: 5px;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.03em;
`;

const SectionDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_muted};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: 32px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const DirectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoCard = styled.div`
  background: #FFFFFF;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow_sm};
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const DirectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ItemLabel = styled.span`
  font-family: ${({ theme }) => theme.font_mono};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.text_muted};
  display: flex;
  align-items: center;
  gap: 6px;

  .label-icon {
    font-size: 13px;
    color: ${({ $iconColor }) => $iconColor || '#71717A'};
  }
`;

const EmailRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const ItemValue = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CopyButton = styled.button`
  font-family: ${({ theme }) => theme.font_mono};
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.bgSubtle};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    border-color: rgba(0, 0, 0, 0.18);
  }
`;

const PlainValue = styled.span`
  font-size: 14px;
  font-weight: 450;
  color: ${({ theme }) => theme.text_primary};
`;

const SubValue = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text_muted};
`;

const LinksRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding-top: 14px;
  border-top: 1px solid ${({ theme }) => theme.borderSubtle};
`;

const OutLink = styled.a`
  font-size: 12.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background: #FAFAFA;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 5px 11px;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    border-color: rgba(0, 0, 0, 0.18);
    background: #F4F4F5;
  }
`;

const ContactForm = styled.form`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding: 24px;
  background: #FFFFFF;
  box-shadow: ${({ theme }) => theme.shadow_sm};
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 640px) {
    padding: 18px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Input = styled.input`
  font-size: 13.5px;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 7px;
  padding: 9px 12px;
  background: #FAFAFA;
  outline: none;
  transition: all 0.15s ease;

  &:focus {
    border-color: #18181B;
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(24, 24, 27, 0.08);
  }

  &::placeholder {
    color: #A1A1AA;
    font-size: 13px;
  }
`;

const TextArea = styled.textarea`
  font-size: 13.5px;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 7px;
  padding: 9px 12px;
  background: #FAFAFA;
  outline: none;
  resize: vertical;
  min-height: 110px;
  transition: all 0.15s ease;

  &:focus {
    border-color: #18181B;
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(24, 24, 27, 0.08);
  }

  &::placeholder {
    color: #A1A1AA;
    font-size: 13px;
  }
`;

const SubmitButton = styled.button`
  font-size: 13px;
  font-weight: 500;
  color: #FAFAFA;
  background: #18181B;
  border: 1px solid #18181B;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.18);
  border-radius: 7px;
  padding: 10px 16px;
  cursor: pointer;
  transition: all 0.15s ease;
  margin-top: 4px;

  &:hover {
    background: #27272A;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [isError, setIsError] = useState(false);
  const [copied, setCopied] = useState(false);
  const form = useRef();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(Bio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = form.current.from_email.value.trim();
    const name = form.current.from_name.value.trim();
    const subject = form.current.subject.value.trim();
    const message = form.current.message.value.trim();

    if (!email || !name || !subject || !message) {
      setStatusMsg('Please complete all required fields.');
      setIsError(true);
      setOpen(true);
      return;
    }

    setLoading(true);
    emailjs
      .sendForm('service_yfaiu5y', 'template_mofb6ha', form.current, 'rLhf1KLdW_t39kn7Z')
      .then(
        () => {
          setLoading(false);
          setStatusMsg('Message sent successfully. I will get back to you shortly.');
          setIsError(false);
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatusMsg('Failed to send message. Please contact mayurhegde11@gmail.com directly.');
          setIsError(true);
          setOpen(true);
        }
      );
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Section id="contact">
      <HeaderBlock>
        <SectionTag>Direct Inquiry</SectionTag>
        <SectionTitle>Contact &amp; Connect</SectionTitle>
        <SectionDesc>Open to software engineering opportunities, technical discussions, and collaborations.</SectionDesc>
      </HeaderBlock>

      <ContactGrid>
        <DirectInfo>
          <InfoCard>
            <DirectItem>
              <ItemLabel>
                <FiMail className="label-icon" />
                <span>Email Address</span>
              </ItemLabel>
              <EmailRow>
                <ItemValue href={`mailto:${Bio.email}`}>{Bio.email}</ItemValue>
                <CopyButton type="button" onClick={handleCopyEmail}>
                  {copied ? 'Copied ✓' : 'Copy'}
                </CopyButton>
              </EmailRow>
            </DirectItem>

            <DirectItem>
              <ItemLabel>
                <FiPhone className="label-icon" />
                <span>Phone</span>
              </ItemLabel>
              <ItemValue href={`tel:${Bio.phone}`}>{Bio.phone}</ItemValue>
            </DirectItem>

            <DirectItem>
              <ItemLabel>
                <FiMapPin className="label-icon" />
                <span>Base Location</span>
              </ItemLabel>
              <PlainValue>{Bio.location}</PlainValue>
              <SubValue>Timezone: Indian Standard Time (UTC+5:30)</SubValue>
            </DirectItem>

            <LinksRow>
              <OutLink href={Bio.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </OutLink>
              <OutLink href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </OutLink>
              <OutLink href={Bio.resume} target="_blank" rel="noopener noreferrer">
                Resume ↗
              </OutLink>
            </LinksRow>
          </InfoCard>
        </DirectInfo>

        <ContactForm ref={form} onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Your Name</Label>
            <Input
              type="text"
              placeholder="e.g. Alex Morgan"
              name="from_name"
              required
              minLength={2}
            />
          </FormGroup>

          <FormGroup>
            <Label>Email Address</Label>
            <Input
              type="email"
              placeholder="alex@company.com"
              name="from_email"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Subject</Label>
            <Input
              type="text"
              placeholder="Software Engineer Opportunity / Discussion"
              name="subject"
              required
              minLength={3}
            />
          </FormGroup>

          <FormGroup>
            <Label>Message</Label>
            <TextArea
              placeholder="Details about the role, team, or project..."
              rows="3"
              name="message"
              required
              minLength={10}
              maxLength={1000}
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message ↗'}
          </SubmitButton>
        </ContactForm>
      </ContactGrid>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={isError ? 'error' : 'success'} sx={{ width: '100%' }}>
          {statusMsg}
        </Alert>
      </Snackbar>
    </Section>
  );
};

export default Contact;

