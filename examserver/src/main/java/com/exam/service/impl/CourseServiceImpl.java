package com.exam.service.impl;

import com.exam.model.videoCourse.Course;
import com.exam.repo.CourseRepository;
import com.exam.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;


    @Override
    public Course addCourse(Course course) {
        return this.courseRepository.save(course);
    }

    @Override
    public Course updateCourse(Course course) {
        return this.courseRepository.save(course);
    }

    @Override
    public Set<Course> getCourses() {
        return new LinkedHashSet<>(this.courseRepository.findAll());
    }

    @Override
    public Course getCourse(Long cId) {
        return this.courseRepository.findById(cId).get();
    }

    @Override
    public void deleteCourse(Long cId) {

        Course course = new Course();
        course.setcId(cId);
        this.courseRepository.delete(course);
    }
}
