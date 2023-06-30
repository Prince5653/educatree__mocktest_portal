package com.exam.service.impl;

import com.exam.model.videoCourse.Course;
import com.exam.model.videoCourse.Videos;
import com.exam.repo.VideosRepository;
import com.exam.service.VideosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;


@Service
public class VideosServiceImpl implements VideosService {

    @Autowired
    private VideosRepository videosRepository;


    @Override
    public Videos addVideo(Videos videos) {
        return this.videosRepository.save(videos);
    }

    @Override
    public Videos updateVideo(Videos videos) {
        return this.videosRepository.save(videos);
    }

    @Override
    public Set<Videos> getVideos() {

        return new HashSet<>(this.videosRepository.findAll());
    }

    @Override
    public Set<Videos> getVideosOfCourse(Course course) {
        return this.videosRepository.findByCourse(course);
    }

    @Override
    public Videos getVideo(Long vId) {

        return this.videosRepository.findById(vId).get();
    }

    @Override
    public void deleteVideo(Long vId) {

        this.videosRepository.deleteById(vId);
    }
}
