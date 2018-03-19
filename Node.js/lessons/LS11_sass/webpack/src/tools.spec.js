import { sum } from './tools';
import { expect } from 'chai';
import chai from 'chai';

const should = chai.should();

describe('sum', () => {
	it('should return 5 for sum(2, 3)', () => {
		expect(sum(2, 3)).to.equal(5);
	});

	it('should return 2 for sum(2, 0)', () => {
		expect(sum(2, 0)).to.equal(2);
	});

	it('should return 0 for sum()', () => {
		expect(sum()).to.equal(0);
		expect(sum()).not.to.be.undefined;
	});


	it('should return 5 for sum(2, 3)', () => {
		sum(2, 3).should.equal(5);
	});

	it('should return 2 for sum(2, 0)', () => {
		sum(2, 0).should.equal(2);
	});

	it('should return 0 for sum()', () => {
		sum().should.equal(0);
	});
});