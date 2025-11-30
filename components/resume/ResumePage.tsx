"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  {
    ssr: false,
  }
);
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
  ssr: false,
});

export default function ResumePage() {
  const [numPages, setNumPages] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  // Update width on resize
  useEffect(() => {
    // Configure worker dynamically
    import("react-pdf").then((module) => {
      const pdfjs = module.pdfjs;
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
    });

    function updateWidth() {
      if (containerRef.current) {
        // Subtract padding/margins to ensure no overflow
        const width = containerRef.current.clientWidth;
        setContainerWidth(Math.min(width - 48, 1000)); // Max 1000px, with 48px buffer (padding)
      }
    }

    // Initial calculation
    updateWidth();

    // Add resize listener
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div
      className="w-full h-full flex flex-col items-center pt-10 pb-10 gap-8"
      ref={containerRef}
    >
      <a
        href="resume/Amaru_Tom_CV.pdf"
        download
        className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full shadow-lg transition-all transform hover:scale-105"
      >
        Télécharger le CV
      </a>

      <div className="shadow-2xl rounded-lg overflow-hidden max-w-full">
        <Document
          file="resume/Amaru_Tom_CV.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex flex-col items-center"
          loading={
            <div className="flex items-center justify-center h-96 w-full min-w-[300px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            </div>
          }
          error={
            <div className="text-red-500 p-4 bg-white rounded shadow">
              Erreur lors du chargement du PDF.
            </div>
          }
        >
          {Array.from(new Array(numPages || 1), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="mb-4 last:mb-0"
              width={containerWidth || 300} // Fallback width
            />
          ))}
        </Document>
      </div>

      <a
        href="resume/Amaru_Tom_CV.pdf"
        download
        className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full shadow-lg transition-all transform hover:scale-105"
      >
        Télécharger le CV
      </a>
    </div>
  );
}
