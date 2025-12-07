"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-96 w-full min-w-[300px] bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
      </div>
    ),
  }
);

const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
  ssr: false,
});

export default function ResumePage() {
  const [numPages, setNumPages] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const pdfPath = "/resume/Amaru_Tom_CV_Freelance.pdf";

  useEffect(() => {
    import("react-pdf").then((module) => {
      const pdfjs = module.pdfjs;
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
    });
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setContainerWidth(Math.min(width - 32, 1000));
      }
    }

    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div
      className="w-full h-full flex flex-col items-center pt-10 pb-10 gap-8"
      ref={containerRef}
    >
      <a
        href={pdfPath}
        download
        className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full shadow-lg transition-all transform hover:scale-105"
      >
        Télécharger le CV
      </a>

      <div className="shadow-2xl rounded-lg overflow-hidden max-w-full bg-white">
        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex flex-col items-center"
          loading={
            <div className="flex items-center justify-center h-96 w-full min-w-[300px] bg-white">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center p-10 gap-4 text-red-500 bg-white">
              <p>Impossible d'afficher le PDF directement.</p>
              <a href={pdfPath} className="underline text-teal-600">
                Ouvrir le PDF
              </a>
            </div>
          }
        >
          {Array.from(new Array(numPages || 0), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="mb-4 last:mb-0 shadow-sm"
              width={containerWidth || 300}
              loading={
                <div className="h-[800px] w-full bg-gray-100 animate-pulse" />
              }
            />
          ))}
        </Document>
      </div>

      <a
        href={pdfPath}
        download
        className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full shadow-lg transition-all transform hover:scale-105"
      >
        Télécharger le CV
      </a>
    </div>
  );
}
