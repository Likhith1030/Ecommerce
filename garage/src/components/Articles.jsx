import React, { useState } from "react";
import { Pagination, Paper, Button } from "@mui/material";
import articleData from "../imgs/blogs.json";
import Navbar from "../components/Navbar";
import { Launch } from "@mui/icons-material";
import "../App.css";

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  // Calculate the index range for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = Object.entries(articleData).slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Handle page change
  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <div className="blogs">
        {currentArticles.map(([title, article], index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              padding: "1rem",
              margin: "1rem",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "600px",
            }}
          >
            <h2>{title}</h2>
            <p>{article[0][0]}</p>
            <Button
              variant="contained"
              color="primary"
              href={article[0][1]}
              endIcon={<Launch />}
            >
              Read More
            </Button>
          </Paper>
        ))}

        {/* Pagination */}
        <div>
          {Object.entries(articleData).length > articlesPerPage && (
            <Pagination
              count={Math.ceil(
                Object.entries(articleData).length / articlesPerPage
              )}
              page={currentPage}
              onChange={handlePageChange}
              sx={{
                padding: "1rem",
                margin: "1rem",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "350px",
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Articles;
