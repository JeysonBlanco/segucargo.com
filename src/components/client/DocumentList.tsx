import React from 'react';
import { Download, File } from 'lucide-react';
import { useDocuments } from '../../hooks/useDocuments';
import LoadingSpinner from '../layout/LoadingSpinner';

const DocumentList = () => {
  const { documents, isLoading, error } = useDocuments();

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500 bg-red-50 p-4 rounded-lg inline-flex items-center">
          <span className="text-sm">{error}</span>
        </div>
      </div>
    );
  }

  if (documents.length === 0) {
    return (
      <div className="text-center py-8">
        <File className="h-12 w-12 mx-auto mb-2 text-gray-400" />
        <p className="text-gray-500">No hay documentos disponibles</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center">
            <File className="h-5 w-5 text-[#2AD4AE]" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{doc.name}</p>
              <p className="text-xs text-gray-500">{doc.date}</p>
            </div>
          </div>
          <button
            onClick={() => window.open(doc.url, '_blank')}
            className="flex items-center px-3 py-1 text-sm text-[#001E5D] hover:text-[#002DA4] transition-colors"
          >
            <Download className="h-4 w-4 mr-1" />
            Descargar
          </button>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;