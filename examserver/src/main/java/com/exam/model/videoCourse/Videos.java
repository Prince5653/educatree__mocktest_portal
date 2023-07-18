package com.exam.model.videoCourse;

import javax.persistence.*;

@Entity
public class Videos {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long vID;

    private  String title;
    @Column(length = 10000)
    private String url;

    @ManyToOne(fetch = FetchType.EAGER)
    private  Course course;

    public Videos() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getvID() {
        return vID;
    }

    public void setvID(Long vID) {
        this.vID = vID;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
