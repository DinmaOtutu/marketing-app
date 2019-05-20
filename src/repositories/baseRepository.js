/**
 * @description BaseRepository
 * @class BaseRepository
 */
class BaseRepository {
  /**
       * @description create a new document
       * @param {model} model
       * @returns {document} returns a newly created document
       */
  constructor(model) {
    this.model = model;
  }

  /**
       * @description create a new document
       * @param {option} options
       * @returns {document} returns a newly created document
       */
  // async create(options) {
  //   try {
  //     const document = await this.model.create(options);
  //     return document;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

export default BaseRepository;
