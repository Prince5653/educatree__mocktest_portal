package com.exam.controller;


import com.exam.model.videoCourse.Course;
import com.exam.model.videoCourse.Videos;
import com.exam.service.CourseService;
import com.exam.service.VideosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/videos")
public class VideosController {

    @Autowired
    private VideosService videosService;

    @Autowired
    private CourseService courseService;

    //add-video
    @PostMapping("/")
    public ResponseEntity<Videos> addVideo(@RequestBody Videos videos)
    {
        return ResponseEntity.ok(this.videosService.addVideo(videos));
    }

    //update-video
    @PutMapping("/")
    public ResponseEntity<Videos> updateVideo(@RequestBody Videos videos)
    {
        return ResponseEntity.ok(this.videosService.updateVideo(videos));
    }

    //get-videos
    @GetMapping("/")
    public ResponseEntity<?> getVideos()
    {
        return  ResponseEntity.ok(this.videosService.getVideos());
    }

    //get-video
    @GetMapping("/{vID}")
    public Videos videos(@PathVariable("vID") Long vID)
    {
        return this.videosService.getVideo(vID);
    }

    //get-videosOfCourse
    @GetMapping("/course/{cId}")
    public ResponseEntity<?> getVideosOfCourse(@PathVariable("cId") Long cId)
    {
        Course course = new Course();
        course.setcId(cId);
        Set<Videos> videosOfCourse = this.videosService.getVideosOfCourse(course);
        return  ResponseEntity.ok(videosOfCourse);
    }


    //delete-video
    @DeleteMapping("/{vID}")
    public void deleteVideo(@PathVariable("vID") Long vID)
    {
        this.videosService.deleteVideo(vID);
    }

}
