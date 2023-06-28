package com.exam.service;

import com.exam.model.videoCourse.Course;
import com.exam.model.videoCourse.Videos;

import java.util.Set;

public interface VideosService {

    public Videos addVideo(Videos videos);

    public Videos updateVideo(Videos videos);

    public Set<Videos> getVideos();

    public Set<Videos> getVideosOfCourse(Course course);

    public Videos getVideo(Long vId);

    public void deleteVideo(Long vId);
}
