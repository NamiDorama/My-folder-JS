import { expect } from 'chai';
import sinon from 'sinon';
import { getUsers } from './users';

describe('getUsers', () => {
	beforeEach(() => {
		const fetch = sinon.stub(window, 'fetch');
		fetch.returns(new Promise(res => res( {
			json() {
				return new Promise(res => res('test'))
			}
		})));
	});

	afterEach(() =>{
		window.fetch.restore();
	});

	it('Should invoke fetch', () => {
		getUsers();
		expect(fetch.called).to.be.true;
	});

	it('Should call console.log() on success', (done) => {
		const log = sinon.stub(console, 'log');
		getUsers()
			.then(data => {
				expect(log.called).to.be.true;
				done();
				log.restore();
			});
	});

	it('Should call console.log() with args', (done) => {
		const log = sinon.stub(console, 'log');
		getUsers()
			.then(data => {
				expect(log.getCall(0).args[0]).to.be.equal('test');
				done();
				log.restore();
			});
	});

});
