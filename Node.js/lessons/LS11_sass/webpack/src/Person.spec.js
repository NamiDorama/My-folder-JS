import chai, { expect } from 'chai';
import { Person } from './Person';

describe('Person class', () => {
	let person;

	beforeEach(() => {
		person = new Person();
	});

	it('should create an instance with passed name', () => {
		const test = 'test';
		expect(new Person(test).name).to.equal(test);
	});

	it('should create an instance with Date type "creation" field', () => {
		expect(person.creation).to.be.an.instanceof(Date);
	});

	it('getCreation should return "night child" for 23 hours', () => {
		const testHour = 23;

		person.creation.setHours(23);
		expect(person.getCreation()).to.equal('night child');
	});

	it('getCreation should return "morning child" for 8 hours', () => {
		const testHour = 8;

		person.creation.setHours(8);
		expect(person.getCreation()).to.equal('morning child');
	});

	it('getCreation should return "day child" for 11 hours', () => {
		const testHour = 11;

		person.creation.setHours(11);
		expect(person.getCreation()).to.equal('day child');
	});

	it('getCreation should return "evening child" for 20 hours', () => {
		const testHour = 20;

		person.creation.setHours(20);
		expect(person.getCreation()).to.equal('evening child');
	});
});
