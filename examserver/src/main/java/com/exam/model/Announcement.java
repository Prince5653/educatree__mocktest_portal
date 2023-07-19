package com.exam.model;

import net.bytebuddy.dynamic.loading.InjectionClassLoader;

import javax.persistence.*;

@Entity
@Table(name = "announcement")
public class Announcement {
@GeneratedValue(strategy = GenerationType.AUTO)
@Id
private Long AnnouncementId;
private String date;
private String title;
@Column(length = 10000)
private String description;
private  boolean active;
public Announcement(){

}
public Announcement(String date,String title,String description,Boolean active){
    this.date = date;
    this.title = title;
    this.description = description;
    this.active = active;
}
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean isActive() {
        return active ;
    }
    public void isActive(boolean active) {
        this.active = active;
    }
}
