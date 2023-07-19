package com.exam.service.impl;

import com.exam.model.Announcement;
import com.exam.repo.AnnounceRepository;
import com.exam.repo.CategoryRepository;
import com.exam.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {
 @Autowired
private AnnounceRepository announcementRepository;


    @Override
    public Announcement addAnnouncement(Announcement announcement) {
        return this.announcementRepository.save(announcement);
    }

    @Override
    public Announcement updateAnnouncement(Announcement announcement) {
        return this.announcementRepository.save(announcement);
    }

    @Override
    public Set<Announcement> getAnnouncements() {
        return new LinkedHashSet<>(this.announcementRepository.findAll());
    }

    @Override
    public Announcement getAnnouncement(Long AnnouncementId) {
        return this.announcementRepository.findById(AnnouncementId).get();
    }

    @Override
    public void deleteAnnouncement(Long AnnouncementId) {
this.announcementRepository.deleteById(AnnouncementId);
    }
}

