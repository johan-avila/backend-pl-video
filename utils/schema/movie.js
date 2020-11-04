const joi = require("@hapi/joi");

const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const movieTitleSchema = joi.string().max(80);
const movieYearSchema = joi.number().min(1888).max(2077);
const movieImgUrlSchema = joi.string().uri();
const movieSynopsisSchema = joi.string().max(300);
const movieDurationSchema = joi.number().min(1).max(300);
const movieContentRatingSchema = joi.string().max(5);
const movieSourceSchema = joi.string().uri();
const movieTagsSchema = joi.array().items(joi.string().max(50));

const createMovieSchema = joi.object({
    title: movieTitleSchema.required(),
    synopsis: movieSynopsisSchema.required(),
    img_url: movieImgUrlSchema.required(),
    year: movieYearSchema.required(),
        
    contentRating: movieContentRatingSchema.required(),
    source: movieSourceSchema.required(),
    tags: movieTagsSchema,
    
    duration: movieDurationSchema.required(),
});

const updateMovieSchema = {
    title: movieTitleSchema,
    synopsis: movieSynopsisSchema,
    img_url: movieImgUrlSchema,
    year: movieYearSchema,
    
    contentRating: movieContentRatingSchema,
    source: movieSourceSchema,
    tags: movieTagsSchema,
    
    duration: movieDurationSchema,
};


module.exports= {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema
}