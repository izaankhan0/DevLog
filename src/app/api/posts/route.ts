const posts: {
  title: string;
  date: string;
  description: string;
  imgUrl: string;
  createdAt: string;
  entries: { title: string; datetime: string; entry: string }[];
}[] = [];

export async function GET() {
  return Response.json(posts);
}

export async function POST(req: Request) {
  const data = await req.json();
  posts.push({
    ...data,
    createdAt: new Date().toISOString(),
    entries: [],
  });
  return Response.json({ success: true, posts });
}

export async function PATCH(req: Request) {
  const { postIndex, logEntry } = await req.json();

  if (posts[postIndex]) {
    posts[postIndex].entries.push({
      ...logEntry,
      imgUrl: logEntry.imgUrl, // ensure imgUrl is either a string or null
    });

    return Response.json({ success: true, post: posts[postIndex] });
  }

  return Response.json({ error: "Invalid index" }, { status: 400 });
}


export async function DELETE(req: Request) {
  const { mode, postIndex, entryIndex } = await req.json();

  if (mode === "post") {
    if (posts[postIndex]) {
      posts.splice(postIndex, 1);
      return Response.json({ success: true, posts });
    }
  }

  if (mode === "entry") {
    if (posts[postIndex] && posts[postIndex].entries[entryIndex]) {
      posts[postIndex].entries.splice(entryIndex, 1);
      return Response.json({ success: true, posts });
    }
  }

  return Response.json({ error: "Invalid request" }, { status: 400 });
}
