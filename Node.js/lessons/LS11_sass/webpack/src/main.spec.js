import { expect } from 'chai';
import sinon from 'sinon';
import { users, defaultProduct, money } from './constants';
import { showMessage, getDay, getAdultUsers, getRandomUsers, Product } from './main';


describe('main.js testing', () => {

  describe('showMessage testing', () => {

    beforeEach(() => {
      const alert = sinon.stub(window, 'alert');
    });

    afterEach(() => {
      window.alert.restore();
    });

    it('Should call alert', () => {
      showMessage('test');
      expect(alert.called).to.be.equal(true);
    });

    it('Should call alert with argument', () => {
      const testText = 'test';
      showMessage(testText);
      expect(alert.getCall(0).args[0]).to.be.equal(testText);
    });

  });

  describe('getDay() testing', () => {

    it('Should be a string type', () => {
      const returnDay = getDay();
      expect(returnDay).to.be.a('string');
    });

    it('Should return current weekday', () => {
      const returnDay = getDay();
      const realDay = new Date().toLocaleString('en', {weekday: 'long'});
      expect(returnDay).to.be.equal(realDay);
    });

  });

  describe('getAdultUsers() testing', () => {

    it('users should have field age && it should be a number', () => {
      users.forEach(el => {
        expect(el).to.have.ownProperty('age');
        expect(el.age).to.be.a('number');
      });
    });

    it('Should return an array', () => {
      const expectUsers = getAdultUsers(users);
      expect(expectUsers).to.be.a('Array');
    });

    it('Should return array with users.age > 18', () => {
      const expectUsers = getAdultUsers(users);
      expectUsers.forEach(user => {
        expect(user.age).to.be.above(18);
      });
    });

  });

  describe('getRandomUsers() testing', () => {

    it('Should return false without arguments', () => {
      expect(getRandomUsers()).to.be.false;
    });

    it('Should return an array', () => {
      const expectUsers = getRandomUsers(users);
      expect(expectUsers).to.be.a('Array');
    });

    it('Should slice users from middle to last element if Math.random() < 0.5', () => {
      const rand = sinon.stub(Math, 'random');
      rand.returns(0.2);
      const middleUser = Math.round(users.length / 2);
      const neededVal = users.slice(middleUser, users.length);

      expect(getRandomUsers(users)).to.be.eql(neededVal);

      Math.random.restore();
    });

    it('Should slice users from 0 to middle if Math.random() > 0.5', () => {
      const rand = sinon.stub(Math, 'random');
      rand.returns(0.7);
      const middleUser = Math.round(users.length / 2);
      const neededVal = users.slice(0, middleUser);

      expect(getRandomUsers(users)).to.be.eql(neededVal);

      Math.random.restore();
    });

  });

  describe('Product testing', () => {
    let prod;
    const test = 'test';
    const testPrice = 20;

    beforeEach(() => {
      prod = new Product(test, testPrice);
    });

    it('Should create an instance with passed title', () => {
      expect(prod.title).to.equal(test);
    });

    it('Should create an instance with default title', () => {
      expect(new Product().title).to.equal(defaultProduct);
    });

    it('Should create an instance with passed price', () => {
      expect(prod.price).to.equal(testPrice);
    });

    it('Should create an instance with default price', () => {
      expect(new Product().price).to.equal(10);
    });

    it('Should return string with $', () => {
      const str = testPrice + money;
      expect(prod.getPrice()).to.be.equal(str);
    });

    it('Should return value with argument 12', () => {
      const testVal = 12;
      prod.setPrice(testVal);
      expect(prod.value).to.be.equal(testVal);
    });

    it('Shouldn\'t assign value with argument 8', () => {
      const testVal = 8;
      prod.setPrice(testVal);
      expect(prod.value).not.to.be.equal(testVal);
    });

    it('Should return error if no argument', () => {
      expect(prod.setPrice).to.throw();
    });

  });

});