// Voice recognition service for Divine Chant Tracker

import { divineNames } from './utils';

export class VoiceRecognitionService {
  private recognition: any;
  private isListening: boolean = false;
  private onResultCallback: (godName: string) => void;
  
  constructor(onResult: (godName: string) => void) {
    this.onResultCallback = onResult;
    
    // Initialize Web Speech API
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.setupRecognition();
    }
  }
  
  private setupRecognition() {
    if (!this.recognition) return;
    
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';
    
    this.recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');
      
      this.processTranscript(transcript);
    };
    
    this.recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
    };
  }
  
  private processTranscript(transcript: string) {
    // Check for divine names in the transcript
    divineNames.forEach(name => {
      const regex = new RegExp(`\\b${name}\\b`, 'gi');
      if (regex.test(transcript)) {
        this.onResultCallback(name);
      }
    });
  }
  
  public startListening() {
    if (!this.recognition) {
      throw new Error('Speech recognition is not supported in your browser');
    }
    
    if (!this.isListening) {
      this.recognition.start();
      this.isListening = true;
    }
  }
  
  public stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }
  
  public isSupported(): boolean {
    return !!this.recognition;
  }
  
  public getStatus(): boolean {
    return this.isListening;
  }
}

// Helper function to detect browser support
export const isVoiceRecognitionSupported = (): boolean => {
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  return !!SpeechRecognition;
};