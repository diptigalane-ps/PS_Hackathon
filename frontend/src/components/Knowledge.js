import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Container, Grid } from "@mui/material";

const courses = [
  {
    title: "Lesson One: Making Personal Finance Decisions",
    category: "Finance",
    image: "https://source.unsplash.com/400x200/?finance,investment",
  },
  {
    title: "Lesson Two: Making Money",
    category: "Finance",
    image: "https://source.unsplash.com/400x200/?money,business",
  },
  {
    title: "Lesson Three: The Art of Budgeting",
    category: "Finance",
    image: "https://source.unsplash.com/400x200/?budget,calculator",
  },
  {
    title: "Lesson Four: Living on Your Own",
    category: "Finance",
    image: "https://source.unsplash.com/400x200/?discussion,planning",
  },
];

const Knowledge = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Knowledge
      </Typography>
      
      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ display: "flex", alignItems: "center", boxShadow: 3 }}>
              <CardMedia
                component="img"
                sx={{ width: 160, height: 120 }}
                image={course.image}
                alt={course.title}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {course.category}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Knowledge;
