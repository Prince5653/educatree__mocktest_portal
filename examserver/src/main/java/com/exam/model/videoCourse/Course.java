package com.exam.model.videoCourse;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;


@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long cId;

    private String courseTitle;

    private String subject;

    private String noOfLectures;

    @Column(length = 10000)
    private String description;

    private String duration;

    private String faculty;

    private String price;

    private String validity;

    private  boolean active = false;

    @OneToMany(mappedBy = "course",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Videos> videos = new LinkedHashSet<>();

    public Course() {
    }

    public Course(String courseTitle, String subject, String noOfLectures, String description, String duration, String faculty, String price, String validity, boolean active) {
        this.courseTitle = courseTitle;
        this.subject = subject;
        this.noOfLectures = noOfLectures;
        this.description = description;
        this.duration = duration;
        this.faculty = faculty;
        this.price = price;
        this.validity = validity;
        this.active = active;
    }

    public Long getcId() {
        return cId;
    }

    public String getCourseTitle() {
        return courseTitle;
    }

    public void setCourseTitle(String courseTitle) {
        this.courseTitle = courseTitle;
    }

    public void setcId(Long cId) {
        this.cId = cId;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getNoOfLectures() {
        return noOfLectures;
    }

    public void setNoOfLectures(String noOfLectures) {
        this.noOfLectures = noOfLectures;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getValidity() {
        return validity;
    }

    public void setValidity(String validity) {
        this.validity = validity;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
