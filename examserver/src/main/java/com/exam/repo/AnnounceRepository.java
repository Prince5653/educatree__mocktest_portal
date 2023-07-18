package com.exam.repo;
import com.exam.model.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;

    public interface AnnounceRepository  extends JpaRepository<Announcement,Long>{

}
