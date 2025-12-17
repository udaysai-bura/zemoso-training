import java.util.*;
public class BusTravelSystem {
    static class Edge {
        int destination;
        int cost;
        Edge(int destination, int cost) {
            this.destination = destination;
            this.cost = cost;
        }
    }
    public static void dijkstra(List<List<Edge>> graph, int source, int destination, String[] cityNames) {
        int n = graph.size();
        int[] distance = new int[n];
        int[] parent = new int[n];
        Arrays.fill(distance, Integer.MAX_VALUE);
        Arrays.fill(parent, -1);
        distance[source] = 0;
        PriorityQueue<int[]> pq =
                new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        pq.add(new int[]{source, 0});
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int city = curr[0];
            int costSoFar = curr[1];
            for (Edge edge : graph.get(city)) {
                int newCost = costSoFar + edge.cost;
                if (newCost < distance[edge.destination]) {
                    distance[edge.destination] = newCost;
                    parent[edge.destination] = city; 
                    pq.add(new int[]{edge.destination, newCost});
                }
            }
        }
        System.out.println("\nSource: " + cityNames[source]);
        System.out.println("Destination: " + cityNames[destination]);

        if (distance[destination] == Integer.MAX_VALUE) {
            System.out.println("No route available.");
            return;
        }
        System.out.print("Cities on the way:");
        printPath(parent, destination, cityNames);
        System.out.println("\nMinimum Travelling Distance = " + distance[destination]+"KM");
        System.out.println("Happy Journey!");
    }
    private static void printPath(int[] parent, int city, String[] cityNames) {
        if (city == -1) return;
        printPath(parent, parent[city], cityNames);
        System.out.print(cityNames[city] + " ");
    }
    private static void addRoute(List<List<Edge>> graph, int src, int dest, int cost) {
        graph.get(src).add(new Edge(dest, cost));
        graph.get(dest).add(new Edge(src, cost));
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] cityNames = {
                "HYD", "KNR", "JGTL", "SRCL", "WGL",
                "NZB", "ADB", "KMM", "MBNR", "KDP"
        };
        int n = cityNames.length;
        System.out.println("Available Cities:");
        for (int i = 0; i < n; i++) {
            System.out.println(i + " - " + cityNames[i]);
        }
        List<List<Edge>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        addRoute(graph, 0, 1, 120); // HYD - KNR
        addRoute(graph, 1, 2, 60);  // KNR - JGTL
        addRoute(graph, 2, 3, 50);  // JGTL - SRCL
        addRoute(graph, 1, 4, 140); // KNR - WGL
        addRoute(graph, 4, 7, 110); // WGL - KMM
        addRoute(graph, 7, 8, 200); // KMM - MBNR
        addRoute(graph, 8, 0, 90);  // MBNR - HYD
        addRoute(graph, 0, 5, 180); // HYD - NZB
        addRoute(graph, 5, 6, 100); // NZB - ADB
        addRoute(graph, 6, 9, 220); // ADB - KDP
        System.out.print("\nEnter source city code: ");
        int source = sc.nextInt();
        System.out.print("Enter destination city code: ");
        int destination = sc.nextInt();
        dijkstra(graph, source, destination, cityNames);
    }
    
}
