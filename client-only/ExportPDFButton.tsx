"use client";
import React from "react";

interface ExportPDFButtonProps {
  chatHistory: Array<{ userText: string; VTAText: string; like?: boolean; dislike?: boolean }>;
}

const ExportPDFButton: React.FC<ExportPDFButtonProps> = ({ chatHistory }) => {
  const exportToPDF = async () => {
    if (typeof window === 'undefined') return;
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.createElement('div');
    element.innerHTML = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h1 style="color: #1240AB; font-size: 20px; margin-bottom: 10px;">Chat History with Capstone VTA</h1>
        <p style="color: #666; font-size: 12px; margin-bottom: 20px;">Generated on: ${new Date().toLocaleString()}</p>
        ${chatHistory.map(chat => `
          <div style="margin-bottom: 20px; page-break-inside: avoid;">
            <p style="margin: 0 0 10px 0; padding: 5px 0;">You: ${chat.userText}</p>
            <p style="color: #1240AB; margin: 0; padding: 5px 0; display: flex; justify-content: space-between; align-items: center;">
              <span>VTA: ${chat.VTAText}</span>
              <span style="color: #FFD700; margin-left: 10px;">
                ${chat.like ? '👍' : ''}${chat.dislike ? '👎' : ''}
              </span>
            </p>
          </div>
        `).join('')}
      </div>
    `;
    const opt = {
      margin: [0.5, 1, 0.5, 1],
      filename: 'capstone-vta-chat.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        letterRendering: true,
        useCORS: true
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait',
        putOnlyUsedFonts: true
      },
      pagebreak: { 
        mode: ['avoid-all', 'css', 'legacy'],
        before: '.page-break'
      }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <button
      onClick={exportToPDF}
      className="flex items-center gap-2 px-4 py-2 bg-[#1240AB] text-white rounded hover:bg-[#1240AB]/90 text-sm"
    >
      Скачать историю чата (PDF)
    </button>
  );
};

export default ExportPDFButton; 