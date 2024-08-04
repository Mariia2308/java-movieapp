import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import api from '../../api/axiosConfig';
import ReviewForm from '../reviewForm/ReviewForm';

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, [getMovieData, movieId]); // Added dependencies here

  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current;

    try {
      await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId }); // Removed unused response variable

      const updatedReviews = [...reviews, { body: rev.value }];
      rev.value = "";
      setReviews(updatedReviews);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col><h3>Reviews</h3></Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          <>
            <Row>
              <Col>
                <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
          </>
          {reviews?.map((r, index) => (
            <React.Fragment key={index}>
              <Row>
                <Col>{r.body}</Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </React.Fragment>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default Reviews;
