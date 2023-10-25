package com.techelevator.domain;


import java.util.List;

public class Player {

    private int playerId;    // player id is the internal id (emp id) NOT jersey number
    private String firstName;
    private String lastName;
    private int jerseyNumber;
    private double salary = 0;
    private List<String> positions;    // a player can play more than one position
    private int teamId;

    public Player(int playerId, int jerseyNumber, String firstName, String lastName, double salary, int teamId) {
        this.playerId = playerId;
        this.jerseyNumber = jerseyNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.teamId = teamId;
    }

    public List<String> getPositions() {
        return positions;
    }

    public void setPositions(List<String> positions) {
        this.positions = positions;
    }

    public int getJerseyNumber() {
        return jerseyNumber;
    }

    public void setJerseyNumber(int jerseyNumber) {
        this.jerseyNumber = jerseyNumber;
    }

    public String getFullName() {
        return firstName + " " + lastName;
    }

    public int getPlayerId() {
        return playerId;
    }

    public void setPlayerId(int playerId) {
        this.playerId = playerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int teamId) {
        this.teamId = teamId;
    }
}