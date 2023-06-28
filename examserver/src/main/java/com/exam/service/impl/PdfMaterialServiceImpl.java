package com.exam.service.impl;

import com.exam.model.studyMaterial.PdfMaterial;
import com.exam.repo.PdfMaterialRepository;
import com.exam.service.PdfMaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;


@Service
public class PdfMaterialServiceImpl implements PdfMaterialService {
    @Autowired
    private PdfMaterialRepository pdfMaterialRepository;


    @Override
    public PdfMaterial addPdf(PdfMaterial pdfMaterial) {
        return this.pdfMaterialRepository.save(pdfMaterial);
    }

    @Override
    public PdfMaterial updatePdf(PdfMaterial pdfMaterial) {
        return this.pdfMaterialRepository.save(pdfMaterial);
    }

    @Override
    public Set<PdfMaterial> getPdfs() {
        return new HashSet<>(this.pdfMaterialRepository.findAll());
    }

    @Override
    public PdfMaterial getPdf(Long pdfID) {
        return this.pdfMaterialRepository.findById(pdfID).get();
    }

    @Override
    public void deletePdf(Long pdfID) {

        PdfMaterial pdfMaterial = new PdfMaterial();
        pdfMaterial.setPdfID(pdfID);
        this.pdfMaterialRepository.deleteById(pdfID);
    }
}
