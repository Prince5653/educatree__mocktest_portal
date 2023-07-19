package com.exam.service;

import com.exam.model.Announcement;
import java.util.Set;
public interface AnnouncementService {
    public Announcement addAnnouncement(Announcement announcement);
    public Announcement updateAnnouncement(Announcement announcement);
    public Set<Announcement> getAnnouncements();

    public Announcement getAnnouncement(Long AnnouncementId) ;
    public void deleteAnnouncement(Long AnnouncementId);


}
