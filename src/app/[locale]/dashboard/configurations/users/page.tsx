"use client";

// const dados: User[] = Array.from({ length: 50 }, () => mockUser());

// Ajuste das colunas para corresponder ao tipo User
// const colunas: Column<User>[] = [
//   { key: "id", label: "ID" },
//   { key: "client", label: "Cliente" },
//   { key: "name", label: "Nome" },
// ];

export default function UsersPage() {
  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Users</h1>
      </div>
      {/* <Card className="p-5">
        <DataTable />
      </Card> */}
    </div>
  );
}
