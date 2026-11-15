
export async function GET() {
    try {
        const statusCode = 200;

        switch (statusCode) {
            case 200:
                return Response.json(
                    { message: 'OK - Success' },
                    { status: 200 }
                );

            case 201:
                return Response.json(
                    { message: 'Created' },
                    { status: 201 }
                );

            case 400:
                return Response.json(
                    { message: 'Bad Request' },
                    { status: 400 }
                );

            case 401:
                return Response.json(
                    { message: 'Unauthorized' },
                    { status: 401 }
                );

            case 403:
                return Response.json(
                    { message: 'Forbidden' },
                    { status: 403 }
                );

            case 404:
                return Response.json(
                    { message: 'Not Found' },
                    { status: 404 }
                );

            case 422:
                return Response.json(
                    { message: 'Validation Error' },
                    { status: 422 }
                );

            case 500:
                throw new Error('Internal Server Error');

            default:
                return Response.json(
                    { message: 'Unknown Status Code' },
                    { status: 400 }
                );
        }

    } catch (e) {
        console.error(e);

        return Response.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
