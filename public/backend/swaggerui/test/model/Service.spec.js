/*
 * MilanoGreen BackEnd
 * API for the web site of the Volunteering Association MilanoGreen, containing the staff of the associations and the organized events
 *
 * OpenAPI spec version: 2.0.0
 * Contact: samuele.milanesi@mail.polimi.it
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MilanoGreenBackEnd);
  }
}(this, function(expect, MilanoGreenBackEnd) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Service', function() {
      beforeEach(function() {
        instance = new MilanoGreenBackEnd.Service();
      });

      it('should create an instance of Service', function() {
        // TODO: update the code to test Service
        expect(instance).to.be.a(MilanoGreenBackEnd.Service);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property image (base name: "image")', function() {
        // TODO: update the code to test the property image
        expect(instance).to.have.property('image');
        // expect(instance.image).to.be(expectedValueLiteral);
      });

    });
  });

}));
