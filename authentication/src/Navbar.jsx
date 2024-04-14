import React from "react"
import './app.css'
import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand nav-title h3" href="#">Vulnercity</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="./home">Home </a>
                        <a class="nav-item nav-link" href="./dashboard">Dashboard</a>
                        <a class="nav-item nav-link" href="#">About us</a>

                    </div>
                </div>
            </nav>
        </div>
    )
}