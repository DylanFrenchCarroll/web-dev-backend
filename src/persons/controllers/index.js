/* eslint-disable no-unused-vars */
import personsService from "./../services/index.js";
import logger
 from "../../utils/Logger.js";
export default (dependencies) => {


    const getPopularPersons = async (request, response, next) => {
        logger.log("info", "Retrieving popular persons");
        const movies = await personsService.getPopularPersons(dependencies);
        response.status(200).json(movies.results);
    };

    const getPersonImages = async (request, response, next) => {
        const id = request.params.id;
        logger.log("info", `Retrieving images for person ${id}`);
        const movies = await personsService.getPersonImages(id, dependencies);
        response.status(200).json(movies.results);
    };

    const getPerson = async (request, response, next) => {
        const id = request.params.id;
        logger.log("info", `Retrieving person data for ${id}`);
        const movies = await personsService.getPerson(id, dependencies);
        response.status(200).json(movies.results);
    };


    return {
        getPopularPersons,
        getPersonImages,
        getPerson,
    };
};
