package com.exam.service;

import com.exam.model.studyMaterial.PdfMaterial;

import java.util.Set;

public interface PdfMaterialService {

    public PdfMaterial addPdf(PdfMaterial pdfMaterial);

    public PdfMaterial updatePdf(PdfMaterial pdfMaterial);

    public Set<PdfMaterial> getPdfs();

    public PdfMaterial getPdf(Long pdfID);

    public  void  deletePdf(Long pdfID);
}
