package com.exam.model.studyMaterial;

import javax.persistence.*;

@Entity
public class PdfMaterial {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long pdfID;

    private String title;
    private String faculty;
    private String date;
    private String subject;
    private String topic;

    @Column(length = 10000)
    private String url;

    public PdfMaterial() {
    }

    public PdfMaterial(String title, String faculty, String date, String subject, String topic, String url) {
        this.title = title;
        this.faculty = faculty;
        this.date = date;
        this.subject = subject;
        this.topic = topic;
        this.url = url;
    }

    public Long getPdfID() {
        return pdfID;
    }

    public void setPdfID(Long pdfID) {
        this.pdfID = pdfID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
