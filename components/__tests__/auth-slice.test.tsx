import authReducer, { setUser, clearUser, setAuth, AuthState } from "../../store/auth-slice";

describe("authSlice", () => {
    const initialState: AuthState = {
        user: null,
        isLoading: true,
        auth: null,
    };

    it("should handle initial state", () => {
        expect(authReducer(undefined, { type: "unknown" })).toEqual(initialState);
    });

    it("should handle setUser", () => {
        const user = { id: 1, name: "John Doe" };
        const actual = authReducer(initialState, setUser(user));
        expect(actual.user).toEqual(user);
        expect(actual.isLoading).toEqual(false);
    });

    it("should handle setAuth", () => {
        const auth = { token: "abc123" };
        const actual = authReducer(initialState, setAuth(auth));
        expect(actual.auth).toEqual(auth);
        expect(actual.isLoading).toEqual(false);
    });

    it("should handle clearUser", () => {
        const stateWithUser: AuthState = {
            user: { id: 1, name: "John Doe" },
            isLoading: false,
            auth: { token: "abc123" },
        };
        const actual = authReducer(stateWithUser, clearUser());
        expect(actual.user).toEqual(null);
        expect(actual.auth).toEqual(null);
        expect(actual.isLoading).toEqual(false);
    });
});