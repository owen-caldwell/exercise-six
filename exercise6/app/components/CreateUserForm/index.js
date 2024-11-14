export default function CreateUserForm() {
    return (
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" required />

            <button type="submit">Create</button>
        </form>
    );
}