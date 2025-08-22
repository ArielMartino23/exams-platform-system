package com.sistema.examenes.exceptions;

public class UserFoundException extends Exception {

    public UserFoundException() {
        super("User with this username already exists!");
    }

    public UserFoundException(String message) {
        super(message);
    }
}
