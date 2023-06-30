package com.exam.repo;

import com.exam.model.videoCourse.Course;
import com.exam.model.videoCourse.Videos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface VideosRepository extends JpaRepository<Videos,Long> {
    Set<Videos> findByCourse(Course course);


}
