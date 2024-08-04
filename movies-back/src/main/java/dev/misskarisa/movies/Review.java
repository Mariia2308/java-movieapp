package dev.misskarisa.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.bson.types.ObjectId;

import java.time.LocalDateTime;


@Document(collection = "reviews")
@Data
@AllArgsConstructor @NoArgsConstructor
public class Review {
    @Id
    private ObjectId id;

    private String body;


    public Review (String body) {
        this.body = body;
    }
}
