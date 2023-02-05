package com.exam.helper;

public class UserFoundException extends  Exception {
    public  UserFoundException() {
        super("User with this Username is already in DB !! Try with another Username");
    }
    public  UserFoundException(String msg){super(msg);}
}
