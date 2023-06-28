package com.exam.service;

import com.exam.model.videoCourse.Course;

import java.util.Set;

public interface CourseService {

    public Course addCourse(Course course);

    public Course updateCourse(Course course);

    public Set<Course> getCourses();

    public  Course getCourse(Long cId);

    public void deleteCourse(Long cId);
}
