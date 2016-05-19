import BPromise, {resolve, reject} from "bluebird";
import chai, {expect} from "chai";
import chaiAsPromised from "chai-as-promised";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import storageWrapper from "index";

chai.use(chaiAsPromised);
chai.use(sinonChai);

describe("`storageWrapper`", () => {

    const AsyncStorage = {};

    beforeEach(() => {
        storageWrapper.__Rewire__("AsyncStorage", AsyncStorage);
    });

    afterEach(() => {
        storageWrapper.__ResetDependency__("AsyncStorage");
    });

    describe("`get` method", () => {

        it("return a Promise", () => {
            AsyncStorage.getItem = sinon.stub().returns(resolve());
            const ret = storageWrapper.get("key");
            expect(ret).to.be.an.instanceOf(BPromise);
        });

        it("resolve the promise with the correct parameters", () => {
            AsyncStorage.getItem = sinon.stub().returns(resolve("value"));
            return expect(storageWrapper.get("key")).to.become("value");
        });

        it("reject the promise if there is an error", () => {
            AsyncStorage.getItem = sinon.stub().returns(reject("error"));
            return expect(storageWrapper.get("key")).to.be.rejectedWith("[react-native-storage-wrapper] - error");
        });

    });

    describe("`set` method", () => {

        it("return a Promise", () => {
            AsyncStorage.setItem = sinon.stub().returns(resolve());
            const ret = storageWrapper.set("key", "value");
            expect(ret).to.be.an.instanceOf(BPromise);
        });

        it("set a value in the `AsyncStorage`", () => {
            AsyncStorage.setItem = sinon.stub().returns(resolve());
            storageWrapper.set("key", "value");
            expect(AsyncStorage.setItem).to.be.calledWith("key", "value");
        });

        it("resolve the promise if there isn't any error", () => {
            AsyncStorage.setItem = sinon.stub().returns(resolve());
            return expect(storageWrapper.set("key", "value")).to.become(undefined);
        });

        it("reject the promise if there is an error", () => {
            AsyncStorage.setItem = sinon.stub().returns(reject("error"));
            return expect(storageWrapper.set("key", "value")).to.be.rejectedWith("[react-native-storage-wrapper] - error");
        });

    });

    describe("`del` method", () => {

        it("return a Promise", () => {
            AsyncStorage.removeItem = sinon.stub().returns(resolve());
            const ret = storageWrapper.del("key");
            expect(ret).to.be.an.instanceOf(BPromise);
        });

        it("remove a value from the `react-native` storage", () => {
            AsyncStorage.removeItem = sinon.stub().returns(resolve());
            storageWrapper.del("key");
            expect(AsyncStorage.removeItem).to.be.calledWith("key");
        });

        it("resolve the promise if there isn't any error", () => {
            AsyncStorage.removeItem = sinon.stub().returns(resolve());
            return expect(storageWrapper.del("key")).to.become(undefined);
        });

        it("reject the promise if there is an error", () => {
            AsyncStorage.removeItem = sinon.stub().returns(reject("error"));
            return expect(storageWrapper.del("key")).to.be.rejectedWith("[react-native-storage-wrapper] - error");
        });

    });

});
