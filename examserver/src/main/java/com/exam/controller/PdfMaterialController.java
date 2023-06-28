package com.exam.controller;


import com.exam.model.studyMaterial.PdfMaterial;
import com.exam.service.PdfMaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/pdf")
public class PdfMaterialController {

    @Autowired
    private PdfMaterialService pdfMaterialService;

    //add-material
    @PostMapping("/")
    public ResponseEntity<PdfMaterial> addPdf(@RequestBody PdfMaterial pdfMaterial)
    {
        return ResponseEntity.ok(this.pdfMaterialService.addPdf(pdfMaterial));
    }

    //update-material
    @PutMapping("/")
    public ResponseEntity<PdfMaterial> updatePdf(@RequestBody PdfMaterial pdfMaterial )
    {
        return  ResponseEntity.ok(this.pdfMaterialService.updatePdf(pdfMaterial));
    }

    //get-materials
    @GetMapping("/")
    public  ResponseEntity<?> getPdfs()
    {
        return  ResponseEntity.ok(this.pdfMaterialService.getPdfs());
    }

    //get-material
    @GetMapping("/{pdfID}")
    public  PdfMaterial pdfMaterial(@PathVariable("pdfID") Long pdfID)
    {
        return this.pdfMaterialService.getPdf(pdfID);
    }

    //delete-material
    @DeleteMapping("/{pdfID}")
    public  void deleteMaterial(@PathVariable("pdfID") Long pdfID)
    {
        this.pdfMaterialService.deletePdf(pdfID);
    }
}
