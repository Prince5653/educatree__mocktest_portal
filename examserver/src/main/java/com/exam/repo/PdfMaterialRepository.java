package com.exam.repo;

import com.exam.model.studyMaterial.PdfMaterial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PdfMaterialRepository extends JpaRepository<PdfMaterial, Long> {
}
