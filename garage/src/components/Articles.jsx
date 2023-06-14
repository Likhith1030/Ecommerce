import React, { useState } from "react";
import { Pagination, Card, CardContent, Button, Grid } from "@mui/material";
import articleData from "../imgs/blogs.json";
import Navbar from "../components/Navbar";
import { Launch } from "@mui/icons-material";
import "../App.css";

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <h1>Sanmax Blogs</h1>
      </div>
      <div className="blogs" style={{ padding: "10px" }}>
        <Grid container spacing={2}>
          {currentArticles.map(([title, article], index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div style={{ width: "500px", height: "350px" }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent>
                    <h2>{title}</h2>
                    <p>{article[0][0]}</p>
                    <Button
                      variant="contained"
                      color="primary"
                      href={article[0][1]}
                      endIcon={<Launch />}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>

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
