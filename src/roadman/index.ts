import type {ApolloServer} from 'apollo-server-express';
import type http from 'http';
import type {Application, Request, Response} from 'express';
import type {RedisPubSub} from 'graphql-redis-subscriptions';

export interface RoadmanBuild {
    app: Application;
    pubsub?: RedisPubSub;
    apolloServer?: ApolloServer;
    httpServer?: http.Server;
    resolvers?: Function[];
}

export type IRoadMan = (args: RoadmanBuild) => Promise<RoadmanBuild>;
