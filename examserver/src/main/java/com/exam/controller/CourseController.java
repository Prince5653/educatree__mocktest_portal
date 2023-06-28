package com.exam.controller;


import com.exam.model.videoCourse.Course;
import com.exam.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/course")
@CrossOrigin("*")
public class CourseController {

    @Autowired
    private CourseService courseService;

    //add-course
    @PostMapping("/")
    public ResponseEntity<?> addCourse(@RequestBody Course course)
    {
        Course course1 = this.courseService.addCourse(course);
        return ResponseEntity.ok(course1);
    }

    //get-course
    @GetMapping("/{cId}")
    public Course getCourse(@PathVariable("cId")Long cId)
    {
        return this.courseService.getCourse(cId);
    }

    //get-all-courses
    @GetMapping("/")
    public ResponseEntity<?> getCourses()
    {
        return  ResponseEntity.ok(this.courseService.getCourses());
    }

    //update-course
    @PutMapping("/")
    public  Course updateCourse(@RequestBody Course course)
    {
        return this.courseService.updateCourse(course);
    }

    //delete-course
    @DeleteMapping("/{cId}")
    public void deleteCourse(@PathVariable("cId") Long cId)
    {
        this.courseService.deleteCourse(cId);
    }
}
